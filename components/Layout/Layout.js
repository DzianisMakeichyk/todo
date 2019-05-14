import Head from 'next/head';
import { GlobalStyle } from '../../util/constant/styles';

const Layout = ({ children }) => <>
	<GlobalStyle />
	<Head>
		<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' />
	</Head>
	{children}
</>

export default Layout;