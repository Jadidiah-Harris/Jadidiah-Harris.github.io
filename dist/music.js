const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: '魔法使いの夜～メインテーマ',
        artist: 'Hideyuki Fukasawa',
        url: 'http://music.163.com/song/media/outer/url?id=501638.mp3',
        cover: '',
      }，
      {
        name: '運命の夜',
        artist: '川井憲次 / 佐々木寿子',
        url: 'http://music.163.com/song/media/outer/url?id=448060.mp3',
        cover: '',
      }，
      {
        name: '騎士王の誇り',
        artist: '川井憲次',
        url: 'http://music.163.com/song/media/outer/url?id=448119.mp3',
        cover: '',
      }
    ]
});
