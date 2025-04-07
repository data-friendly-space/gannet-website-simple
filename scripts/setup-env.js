#!/usr/bin/env node

/**
 * Security configuration setup script
 * Creates or validates necessary environment variables for secure operation
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Path to .env file
const envFile = path.join(process.cwd(), '.env.local');

// Required environment variables for security
const requiredSecurityEnvVars = [
  'NEXT_PUBLIC_SITE_URL',
  'CSP_REPORT_ONLY',
  'CSP_REPORT_URI'
];

// Generate a secure random string
function generateSecureString(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

// Check if .env file exists
if (!fs.existsSync(envFile)) {
  console.log('Creating new .env.local file with security configuration...');
  
  // Create initial content
  let envContent = `# Security configuration
# Generated on ${new Date().toISOString()}

# Site URL for CORS and CSP configuration
NEXT_PUBLIC_SITE_URL=${process.env.VERCEL_URL || process.env.CLOUDFLARE_URL || 'http://localhost:3000'}

# Content Security Policy configuration
CSP_REPORT_ONLY=false
CSP_REPORT_URI=

# Security settings
NODE_ENV=production
`;

  // Write file
  fs.writeFileSync(envFile, envContent, 'utf8');
  console.log('.env.local file created successfully.');
} else {
  console.log('Checking existing .env.local file...');
  
  // Read existing file
  const envContent = fs.readFileSync(envFile, 'utf8');
  let envVars = {};
  
  // Parse environment variables
  envContent.split('\n').forEach(line => {
    if (line && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        envVars[key.trim()] = valueParts.join('=').trim();
      }
    }
  });
  
  // Check required variables
  let hasChanges = false;
  let updatedContent = envContent;
  
  requiredSecurityEnvVars.forEach(envVar => {
    if (!envVars[envVar]) {
      console.log(`Missing required environment variable: ${envVar}`);
      hasChanges = true;
      
      // Add variable with default value
      let defaultValue = '';
      if (envVar === 'NEXT_PUBLIC_SITE_URL') {
        defaultValue = process.env.VERCEL_URL || 
                      process.env.CLOUDFLARE_URL || 
                      'http://localhost:3000';
      } else if (envVar === 'CSP_REPORT_ONLY') {
        defaultValue = 'false';
      }
      
      updatedContent += `\n${envVar}=${defaultValue}`;
    }
  });
  
  // Update file if changes were made
  if (hasChanges) {
    fs.writeFileSync(envFile, updatedContent, 'utf8');
    console.log('.env.local file updated with security configuration.');
  } else {
    console.log('Security configuration is valid.');
  }
}

console.log('Security environment setup complete!'); 