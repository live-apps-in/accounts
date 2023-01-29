import { useEffect } from "react";

// routing
import { Routes } from "src/routes";

// redux
import { Provider as StoreProvider } from "react-redux";
import { store } from "src/redux";

import { AuthProvider } from "src/provider";

// alert
import { CustomModal, ErrorBoundary, FlashMessage } from "src/components";
import { AlertProvider } from "src/components";

// react-query
import { QueryClient, QueryClientProvider } from "react-query";

// global css
import "./assets/scss/global.scss";

// other
import { createEventEmitters } from "src/utils";

const queryClient = new QueryClient();

function App() {
  useEffect(() => createEventEmitters(), []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <StoreProvider store={store}>
          <AlertProvider>
            <FlashMessage />
            <CustomModal />
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </AlertProvider>
        </StoreProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
