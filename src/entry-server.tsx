import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import App from './App';

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StaticRouter>,
  );
  return html;
}
