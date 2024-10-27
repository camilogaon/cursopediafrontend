import React, { useEffect } from 'react';

const AdComponent = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    return (
      <ins class="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2648160825812764"
        data-ad-slot="4819779154"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    );
};

export default AdComponent;
