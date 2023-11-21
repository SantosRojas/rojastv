const Canales = [
    {   
        name:"Latina",
        category:"nacionales",
        url:"https://live-latinav2-mdstrm.secure.footprint.net/live-stream-mp/d1aden84nxx8u4/3330943a0248407faa8c6f5f5c874fa4/5ce7109c7398b977dc0744cd/index.m3u8",
        url_image:"https://i.imgur.com/8Hvk59N.png"
    },
    {   
        name:"ATV",
        category:"nacionales",
        url:"https://d3krdjs7is1y42.cloudfront.net/ATVpe/df13ed57843877b21ad969184ab6888f.sdp/playlist.m3u8",
        url_image:"https://www.atv.pe/wp-content/uploads/2023/08/signal-atv-8.png"
    },
    {   
        name:"ATV Sur",
        category:"nacionales",
        url:"https://d3krdjs7is1y42.cloudfront.net/ATVSur/f05b236d4a4d43b3987d6f5ed5686d6e.sdp/playlist.m3u8",
        url_image:"https://www.atv.pe/wp-content/uploads/2023/08/signal-atv-sur-17.png"
    },
    {   
        name:"ATV+",
        category:"nacionales",
        url:"https://d3krdjs7is1y42.cloudfront.net/ATVmas/74ee4169b59e6f987ae3d77317309109.sdp/playlist.m3u8",
        url_image:"https://www.atv.pe/wp-content/uploads/2023/08/signal-atv-plus-17.png"
    },
    {   
        name:"Las Estrellas",
        category:"cable",
        url:"https://channel01.akamaized.net/hls/live/2022749/event01/index.m3u8",
        url_image:"https://i.imgur.com/g5ShxZ7.png"
    },
    {   
        name:"Cinema",
        category:"peliculas",
        url:"https://byecableiptvnew3.ddns.net/ENVIVOCINEMA/index.m3u8",
        url_image:"https://i.imgur.com/ExZeBRf.png"
    },
    {   
        name:"Cartoon Network",
        category:"dibujos",
        url:"https://playout.cdn.cartoonnetwork.com.br/playout_02/playlist-720p.m3u8",
        url_image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/512px-Cartoon_Network_2010_logo.svg.png"
    },
    {   
        name:"Cartoonito",
        category:"dibujos",
        url:"https://playout.cdn.cartoonnetwork.com.br/playout_04/playlist-720p.m3u8",
        url_image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Cartoonito_-_Logo_2021.svg/512px-Cartoonito_-_Logo_2021.svg.png"
    },
    {   
        name:"Xtrema Cartoons",
        category:"dibujos",
        url:"https://stmv1.cnarlatam.com/cineinfantil/cineinfantil/playlist.m3u8",
        url_image:"https://i.imgur.com/X2d8y4e.png"
    },
    {   
        name:"Tv Peru",
        category:"nacionales",
        url:"https://d6vls0u25arys.cloudfront.net/out/v1/777b4d4cc0984575a7d14f6ee57dbcaf/index_2.m3u8",
        url_image:"https://i.imgur.com/6io0IrX.png"
    },
    {   
        name:"Planeta Tv Movie",
        category:"peliculas",
        url:"https://scl.edge.grupoz.cl/movie/live/playlist.m3u8",
        url_image:"https://i.imgur.com/ZjIgPmV.png"

    },
    {   
        name:"Xtrema Terror",
        category:"peliculas",
        url:"https://stmv1.cnarlatam.com/cineterror/cineterror/playlist.m3u8",
        url_image:"https://i.imgur.com/FcaTUym.png"
    },
    {
        name:"Peru Canal",
        category:"nacionales",
        url:"https://a.cdni.live/peruchanel/peruchanel/playlist.m3u8",
        url_image:"https://i.imgur.com/01KEiEp.png"
    },
    {
        name:"Canal IPe",
        category:"cable",
        url:"https://d16467quqotqb8.cloudfront.net/out/v1/3f2cb1658d114f2693eff18d83199e67/index.m3u8",
        url_image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Identidad_Peruana_ipe_2020.png/1200px-Identidad_Peruana_ipe_2020.png"
    },
    {   
        name:"Antares TV",
        category:"nacionales",
        url:"https://5c3fb01839654.streamlock.net:1963/iptvantares/liveantarestv/playlist.m3u8",
        url_image:"https://i.imgur.com/05gwtk2.png"
    },
    {   
        name:"Autentica TV",
        category:"nacionales",
        url:"https://live.obslivestream.com/autenticatvmux/index.m3u8",
        url_image:"https://i.imgur.com/bEJK3RN.png"
    },
    {   
        name:"Doble CTV",
        category:"nacionales",
        url:"https://7.innovatestream.pe:19360/cctvchupaca/cctvchupaca.m3u8",
        url_image:"https://i.imgur.com/2zCD4TB.png"
    },
    {   
        name:"Telecolor",
        category:"nacionales",
        url:"https://live.obslivestream.com/telecolormux/index.m3u8",
        url_image:"https://i.imgur.com/Ug6XNIU.png"
    },
    {   
        name:"DMJ",
        category:"nacionales",
        url:"https://stmv1.voxhdnet.com/dmjsurtv/dmjsurtv/playlist.m3u8",
        url_image:"https://i.imgur.com/KSePPeW.png"
    },
    {   
        name:"JN19",
        category:"nacionales",
        url:"https://servilive.com:3028/live/jntv19live.m3u8",
        url_image:"https://i.imgur.com/dudxyqk.png"
    },
    {   
        name:"Uranio TV",
        category:"nacionales",
        url:"https://live.obslivestream.com/uraniotv/index.m3u8",
        url_image:"https://i.imgur.com/EeNpfIr.png"
    },
    {   
        name:"Vision Sur",
        category:"nacionales",
        url:"https://ott1.hdlatam.tv/live_abr/webtvVisionSur/playlist.m3u8",
        url_image:"https://i.imgur.com/AbZYWEQ.png"
    },
    {   
        name:"La Red",
        category:"cable",
        url:"https://unlimited1-cl-isp.dps.live/lared/lared.smil/playlist.m3u8",
        url_image:"https://i.imgur.com/chc8x4a.png"
    },
    {   
        name:"Cine Canal",
        category:"peliculas",
        url:"https://6362ca6f1fc28.streamlock.net:443/cinecanal/cinecanal/playlist.m3u8",
        url_image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/CinecanalLA.png/512px-CinecanalLA.png"
    },
    {   
        name:"Cine Sony",
        category:"peliculas",
        url:"https://cdn.klowdtv.net/803B48A/n1.klowdtv.net/live1/cine_720p/playlist.m3u8",
        url_image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sony_Channel_Logo.png/512px-Sony_Channel_Logo.png"
    },
    {   
        name:"Cinerama",
        category:"peliculas",
        url:"https://5d00db0e0fcd5.streamlock.net/7062/7062/playlist.m3u8",
        url_image:"https://play-lh.googleusercontent.com/RJ49IeJve4VPALBXqrqJGeAYOEoLQIZZ4zWwtJhofisng6ZYwGemZ-VXCx9ZQ-u7fw"
    },
    {   
        name:"Genios TV",
        category:"nacionales",
        url:"https://live.obslivestream.com/geniostvmux/index.m3u8",
        url_image:"https://i.imgur.com/iH2Lx6E.png"
    },
    {   
        name:"Platzi",
        category:"cable",
        url:"https://mdstrm.com/live-stream-playlist/629a63ae8df27c082901f78b.m3u8",
        url_image:"https://i.imgur.com/vEzeqHP.png"
    },
    {   
        name:"Sony Novelas",
        category:"cable",
        url:"https://a89829b8dca2471ab52ea9a57bc28a35.mediatailor.us-east-1.amazonaws.com/v1/master/0fb304b2320b25f067414d481a779b77db81760d/CanelaTV_SonyCanalNovelas/playlist.m3u8",
        url_image:"https://i.imgur.com/yijitpa.png"
    },
    {   
        name:"Golden Plus",
        category:"peliculas",
        url:"https://linear-410.frequency.stream/dist/vix/410/hls/master/playlist.m3u8",
        url_image:"https://i.imgur.com/OOEkyM2.png"
    },
    {   
        name:"Televisa",
        category:"cable",
        url:"https://ythls.armelin.one/channel/UCRujF_YxVVFmTRWURQH-Cww.m3u8",
        url_image:"https://i.imgur.com/YYzZdRE.png"
    },
    {   
        name:"Golden Premier",
        category:"peliculas",
        url:"https://linear-411.frequency.stream/dist/vix/411/hls/master/playlist.m3u8",
        url_image:"https://i.imgur.com/JMa7jws.png"
    }
    
]

// export default Canales;
module.exports = {
    Canales
  };