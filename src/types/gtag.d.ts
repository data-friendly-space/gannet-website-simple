declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: {
        page_path?: URL | string;
        event_category?: string;
        event_label?: string;
        value?: number;
      }
    ) => void;
  }
}

export {}; 