interface Video {
  id: number;
  videoSource: { uri: string };
  accountName: string;
  likes: string;
  shares: string;
}

const videosData: Video[] = [
  {
    id: 1,
    videoSource: { uri: "https://customer-774yiitpprizjeu1.cloudflarestream.com/f969c014f65846128cd9a606bae7ccdf/manifest/video.m3u8" },
    accountName: 'Simon Riley',
    likes: '108k',
    shares: '50k',
  },
  {
    id: 2,
    videoSource: { uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    accountName: 'Emily Smith',
    likes: '75k',
    shares: '42k',
  },
  {
    id: 3,
    videoSource: { uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    accountName: 'John Doe',
    likes: '98k',
    shares: '58k',
  },
  {
    id: 4,
    videoSource: { uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    accountName: 'Sarah Johnson',
    likes: '60k',
    shares: '35k',
  },
  {
    id: 5,
    videoSource: { uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
    accountName: 'Michael Brown',
    likes: '120k',
    shares: '72k',
  },
  {
    id: 6,
    videoSource: { uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
    accountName: 'Emma Wilson',
    likes: '89k',
    shares: '48k',
  },
  {
    id: 7,
    videoSource: { uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
    accountName: 'David Lee',
    likes: '55k',
    shares: '31k',
  },
  {
    id: 8,
    videoSource: { uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
    accountName: 'Olivia Davis',
    likes: '105k',
    shares: '63k',
  },
  {
    id: 9,
    videoSource: { uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" },
    accountName: 'James Wilson',
    likes: '71k',
    shares: '40k',
  },
  {
    id: 10,
    videoSource: { uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
    accountName: 'Sophia Anderson',
    likes: '82k',
    shares: '47k',
  },
];

export default videosData;
