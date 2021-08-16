import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>SOCKETS - Vente de chaussettes</title>
                    <meta   name="keywords" 
                            content="nextjs, chaussettes, vente, achat, acheter" 
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
      )
    }
  }
  
  export default MyDocument