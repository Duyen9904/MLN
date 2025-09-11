export interface StoryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  title: string;
  context: string;
  quote: {
    text: string;
    author: string;
    position?: string;
  };
  details: {
    period: string;
    location: string;
    significance: string;
  };
  additionalImages?: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

export const storyImages: StoryImage[] = [
  {
    id: "khaithacthan-gd1",
    src: "/khaithacthan-gd1.jpg",
    alt: "Khai thác than giai đoạn 1 - Thời kỳ thuộc địa Pháp",
    caption: "Khai thác than thời kỳ thuộc địa Pháp",
    title: "Khai Thác Than - Giai Đoạn Đầu",
    context:
      "Ngành khai thác than do thực dân Pháp bắt đầu từ năm 1888 tại Hòn Gai – Cẩm Phả, trở thành một trong những ngành công nghiệp quan trọng nhất ở Việt Nam thời thuộc địa. Công nhân mỏ than làm việc trong điều kiện cực kỳ khắc nghiệt, nguy hiểm, với mức lương rẻ mạt, nhưng chính từ đây, giai cấp công nhân Việt Nam đã hình thành và sớm bước vào phong trào đấu tranh cách mạng.",
    quote: {
      text: "Công nhân là giai cấp kiên quyết nhất, triệt để nhất, có khả năng lãnh đạo cách mạng đến thắng lợi.",
      author: "Hồ Chí Minh",
      position: "Trong tác phẩm Đường Kách Mệnh (1927)",
    },
    details: {
      period: "1888–1945",
      location: "Quảng Ninh, Việt Nam",
      significance:
        "Cái nôi ra đời của giai cấp công nhân Việt Nam, nơi bùng nổ nhiều phong trào đấu tranh sớm nhất",
    },
    additionalImages: [
      {
        src: "/placeholder-mining-1.jpg",
        alt: "Công nhân mỏ than làm việc",
        caption: "Công nhân mỏ than trong ca làm việc",
      },
      {
        src: "/placeholder-mining-2.jpg",
        alt: "Khu vực khai thác than",
        caption: "Khu vực khai thác than với thiết bị thô sơ",
      },
    ],
  },
  {
    id: "nhamaydetnamdinh",
    src: "/nhamaydetnamdinh.jpg",
    alt: "Nhà máy dệt Nam Định - Thời kỳ thuộc địa Pháp",
    caption: "Nhà máy dệt Nam Định thời kỳ thuộc địa",
    title: "Nhà Máy Dệt Nam Định - Biểu Tượng Công Nghiệp",
    context:
      "Nhà máy dệt Nam Định được xây dựng từ năm 1898, là một trong những cơ sở công nghiệp lớn nhất Đông Dương thời thuộc địa. Đây là nơi tập trung hàng nghìn công nhân, phần lớn là phụ nữ, làm việc trong điều kiện khắc nghiệt với mức lương rẻ mạt. Công nhân dệt Nam Định đã sớm trở thành lực lượng nòng cốt của phong trào công nhân Việt Nam.",
    quote: {
      text: "Giai cấp công nhân là giai cấp lãnh đạo cách mạng, vì giai cấp công nhân là giai cấp tiên tiến nhất, kiên quyết nhất, triệt để nhất.",
      author: "Hồ Chí Minh",
      position: "Chủ tịch nước Việt Nam Dân chủ Cộng hòa",
    },
    details: {
      period: "1898–1954",
      location: "Nam Định, Việt Nam",
      significance:
        "Trung tâm công nghiệp lớn và là điểm bùng phát nhiều phong trào đấu tranh công nhân",
    },
    additionalImages: [
      {
        src: "/placeholder-textile-1.jpg",
        alt: "Công nhân dệt trong nhà máy",
        caption: "Công nhân dệt làm việc trong điều kiện khắc nghiệt",
      },
      {
        src: "/placeholder-textile-2.jpg",
        alt: "Cuộc đình công của công nhân",
        caption: "Cuộc đình công của công nhân dệt Nam Định năm 1930",
      },
    ],
  },
  {
    id: "giaidoan2",
    src: "/giaidoan2.jpg",
    alt: "Giai đoạn 2 - Cách mạng và Đảng ra đời",
    caption: "Phong trào cách mạng và sự ra đời của Đảng Cộng sản Việt Nam",
    title: "Cách Mạng Và Đảng Ra Đời",
    context:
      "Giai đoạn này đánh dấu bước ngoặt quan trọng: từ những cuộc đấu tranh tự phát, giai cấp công nhân đã có tổ chức tiên phong là Đảng Cộng sản Việt Nam lãnh đạo. Từ đây, phong trào công nhân gắn bó chặt chẽ với phong trào yêu nước, trở thành lực lượng cách mạng có tổ chức, dẫn dắt dân tộc đi theo con đường giải phóng dân tộc và chủ nghĩa xã hội.",
    quote: {
      text: "Sự ra đời của Đảng Cộng sản Việt Nam là bước ngoặt vô cùng quan trọng trong lịch sử cách mạng Việt Nam, chứng tỏ giai cấp công nhân ta đã trưởng thành và đủ sức lãnh đạo cách mạng.",
      author: "Hồ Chí Minh",
      position: "Chủ tịch nước Việt Nam Dân chủ Cộng hòa",
    },
    details: {
      period: "1930–1945",
      location: "Toàn quốc",
      significance:
        "Đảng Cộng sản Việt Nam ra đời, chấm dứt khủng hoảng đường lối cách mạng, xác lập vai trò lãnh đạo của giai cấp công nhân.",
    },
    additionalImages: [
      {
        src: "/placeholder-revolution-1.jpg",
        alt: "Cuộc mít-tinh của công nhân",
        caption: "Cuộc mít-tinh lớn của công nhân",
      },
      {
        src: "/placeholder-revolution-2.jpg",
        alt: "Lãnh đạo Đảng với công nhân",
        caption: "Lãnh đạo Đảng làm việc với công nhân",
      },
    ],
  },
  {
    id: "cauchuyenlacado",
    src: "/cauchuyenlacado.jpg",
    alt: "Câu chuyện lá cờ đỏ - Phong trào cách mạng",
    caption: "Câu chuyện lá cờ đỏ - Phong trào cách mạng",
    title: "Câu Chuyện Lá Cờ Đỏ - Biểu Tượng Đoàn Kết",
    context:
      "Trong những năm 1929–1930, giai cấp công nhân Việt Nam đã giương cao lá cờ đỏ búa liềm trong các cuộc đấu tranh. Lá cờ đỏ không chỉ là dấu hiệu tập hợp lực lượng mà còn trở thành biểu tượng chính trị của Đảng Cộng sản Đông Dương, thể hiện ý chí kiên cường, tinh thần đoàn kết và khát vọng giải phóng dân tộc, giải phóng giai cấp.",
    quote: {
      text: "Lá cờ đỏ búa liềm tung bay trong phong trào đấu tranh 1929–1930, khẳng định con đường cách mạng vô sản mà giai cấp công nhân và nhân dân Việt Nam đã lựa chọn.",
      author: "Văn kiện Đảng",
      position: "",
    },
    details: {
      period: "1929–1930",
      location: "Nhà máy, hầm mỏ, đồn điền và các cơ sở cách mạng",
      significance:
        "Biểu tượng của phong trào công nhân và sự khẳng định vai trò lãnh đạo của Đảng Cộng sản Việt Nam",
    },
    additionalImages: [
      {
        src: "/placeholder-flag-1.jpg",
        alt: "Công nhân treo lá cờ đỏ",
        caption: "Công nhân treo lá cờ đỏ trong phong trào đấu tranh",
      },
      {
        src: "/placeholder-flag-2.jpg",
        alt: "Lá cờ đỏ trong cách mạng",
        caption: "Lá cờ đỏ búa liềm – biểu tượng niềm tin và đoàn kết",
      },
    ],
  },
];
