declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PG_CONNECTION_STRING: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}

export {}
