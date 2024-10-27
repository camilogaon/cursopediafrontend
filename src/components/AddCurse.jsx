import React, { useEffect } from 'react';

const AddCurse = () => {
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
        data-ad-format="fluid"
        data-ad-layout-key="-5l+ca-1r-8v+wt"
        data-ad-client="ca-pub-2648160825812764"
        data-ad-slot="4000627280"></ins>
    );
};

export default AddCurse;