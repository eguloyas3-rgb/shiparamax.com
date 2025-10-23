"use client";

import { useEffect, useState } from "react";

export default function AutoTranslate() {
  const [userLang, setUserLang] = useState<string | null>(null);

  useEffect(() => {
    // Detect language via free GeoIP API
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.languages) {
          const lang = data.languages.split(",")[0];
          setUserLang(lang);
        } else {
          setUserLang("en");
        }
      })
      .catch(() => setUserLang("en"));
  }, []);

  useEffect(() => {
    if (!userLang) return;

    // Inject Google Translate script
    const addGoogleTranslate = () => {
      if (document.getElementById("google-translate-script")) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      // @ts-ignore
      window.googleTranslateElementInit = () => {
        // @ts-ignore
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh,zh-TW,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,he,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,rw,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,tt,te,th,tr,tk,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );

        // Wait for widget to render, then auto select language & trigger translate
        setTimeout(() => {
          const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
          if (select) {
            // Set the dropdown value to detected language
            select.value = userLang;
            // Trigger change event to auto translate
            select.dispatchEvent(new Event("change"));
          }
        }, 1000);
      };
    };

    addGoogleTranslate();
  }, [userLang]);

  return (
    <>
      {/* Hidden Google Translate widget */}
      <div
        id="google_translate_element"
        style={{
          display: "none",
        }}
      ></div>
      {/* Optional: A small visible indicator */}
      {/* <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
        Translating...
      </div> */}
    </>
  );
}
