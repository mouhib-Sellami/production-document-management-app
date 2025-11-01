import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from "@redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion';
import { ModalsProvider } from "@mantine/modals";
import { SessionProvider } from './contexts/SessionContext.tsx';

createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MantineProvider stylesTransform={emotionTransform}>
        <MantineEmotionProvider>
          <Notifications />
          <ModalsProvider>
            <SessionProvider>
              <App />
            </SessionProvider>
          </ModalsProvider>
        </MantineEmotionProvider>
      </MantineProvider >
    </PersistGate>
  </ReduxProvider>
)
