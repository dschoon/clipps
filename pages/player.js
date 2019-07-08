import Head from 'next/head';
import { withRouter } from 'next/router';

let window = {}; // Temporarily define window for server-side

const Index = withRouter(props => (
    <div className="embed-player">
        <Head>
            <title>Embedded Player</title>
            <meta name="google-site-verification" content="8B-dzlEeFA2jqaFfcBVORb7e8REcCIaq6TJbN-ZYbZM"/>
            <link rel="canonical" href="https://clip.ps/"/>
            <meta className="meta-title" property="og:title" itemProp="name" content="Clipps | Podcast Discovery"/>
            <meta className="meta-description" property="og:description" itemProp="description"
                  content="Clipps is a podcast streaming platform that helps you discover new shows around your interests. Sign up today and be the first to try @ClippsApp!"/>
            <meta itemProp="image" content="http://blog.clip.ps/wp-content/uploads/2019/06/clippsBanner.jpg"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://clip.ps/"/>
            <meta property="og:title" content="Clipps | Podcast Discovery"/>
            <meta property="og:site_name" content="Clipps | Podcast Discovery"/>
            <meta property="fb:app_id" content="1193758794119496"/>
            <meta property="fb:pages" content="474680926669282"/>
            <meta property="fb:pages" content="621562294863574"/>
            <meta property="fb:pages" content="449820595847825"/>
            <meta property="og:image" content="https://blog.clip.ps/wp-content/uploads/2019/06/clippsBanner.jpg"/>
            <meta property="og:image:secure_url"
                  content="https://blog.clip.ps/wp-content/uploads/2019/06/clippsBanner.jpg"/>
            <meta property="og:image:width" content="1835"/>
            <meta property="og:image:height" content="702"/>
            <meta name="twitter:title" content="Clipps | Podcast Discovery"/>
            <meta name="twitter:description"
                  content="Clipps is a podcast streaming platform that helps you discover new shows around your interests. Sign up today and be the first to try @ClippsApp!"/>
            <meta name="twitter:site" content="@ClippsApp"/>
            <meta name="twitter:image" content="https://blog.clip.ps/wp-content/uploads/2019/06/clippsBanner.jpg"/>
            <meta name="twitter:creator" content="@ClippsApp"/>
            <meta name="twitter:card" content="player"/>
            <meta name="twitter:player" content={`https://www.clip.ps/e/player?id=${props.router && props.router.query && props.router.query.id}`}/>
            <meta name="twitter:player:width" content="380"/>
            <meta name="twitter:player:height" content="108"/>
            <meta property="theme-color" content="#091034"/>
            <link rel="apple-touch-icon" sizes="192x192" href="https://blog.clip.ps/wp-content/uploads/2019/06/clippsSocial-md.jpg"/>
            <link rel="apple-touch-icon" sizes="512x512" href="https://blog.clip.ps/wp-content/uploads/2019/06/clippsSocial.jpg"/>
            <link rel="dns-prefetch" href="//fonts.googleapis.com"/>
            <link rel="alternate" type="application/rss+xml" title="Clipps Blog » Feed" href="https://blog.clip.ps/feed/"/>
            <link rel="apple-touch-icon-precomposed" href="https://blog.clip.ps/wp-content/uploads/2019/06/cropped-favicon-180x180.png"/>
            <link rel="pingback" href="https://blog.clip.ps/xmlrpc.php"/>
        </Head>
        <div>
            <iframe
                src={`https://www.clip.ps/e/player?id=${props.router && props.router.query && props.router.query.id}`}
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '155px',
                    border: '0',
                }}
            />
        </div>
    </div>
));

export default Index;