const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: '魔法使いの夜～メインテーマ',
        artist: 'Hideyuki Fukasawa',
        url: 'https://music.163.com/song?id=501638',
        cover: '',
      }，
      {
        name: '運命の夜',
        artist: '川井憲次 / 佐々木寿子',
        url: 'https://music.163.com/song?id=448060',
        cover: '',
      }
    ]
});
