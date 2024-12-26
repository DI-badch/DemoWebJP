import {
  Header,
  HeadlineSection,
  AboutUsSection,
  SolutionSection,
  CareerSection,
  PartnerSection,
  Footer,
} from "@di/components-ui";

export default function Home() {
  return (
    <main>
      <Header
        items={[
          { title: "Tuyển Dụng", url: "/career" },
          { title: "Tech Blogs", url: "/blogs" },
          { title: "Về Chúng Tôi", url: "/about" },
        ]}
      />
      <div className="md:di-pt-44 di-flex di-min-h-screen di-flex-col di-items-center di-justify-between di-overflow-x-hidden">
        <HeadlineSection
          intros={{
            content:
              "Chúng tôi muốn tạo ra 1 môi trường nơi các kỹ sư Việt Nam làm chủ các công nghệ tiên tiến nhất. Qua đó biến những công nghệ khó thành những giải pháp hữu dụng giải quyết được những bài toán thực tế trong cuộc sống.",
          }}
        />
        <AboutUsSection
          aboutUses={[
            {
              id: 1,
              title: "Sứ mệnh",
              content:
                "Với slogan Empower Your Will Data Impact cam kết hỗ trợ và thúc đẩy ứng dụng công nghệ vào thực tế, giúp đẩy mạnh sự phát triển của doanh nghiệp trong thời đại số, điều có thể thay đổi thế giới và tương lai của chúng ta.    Empower Your Will cũng là kim chỉ nam để chúng tôi xây dựng doanh nghiệp, trở thành nơi mà mọi thành viên trong công ty có thể thực hiện được cả các mục tiêu và mong muốn trong sự nghiệp của mình.",
            },
            {
              id: 2,
              title: "Tầm nhìn",
              content:
                "Data Impact hướng tới mục tiêu trở thành đối tác công nghệ đáng tin cậy hàng đầu, giúp khách hàng lựa chọn và ứng dụng được các công nghệ phù hợp và tiên tiến nhất.  Trong một thế giới cạnh tranh khốc liệt như hiện tại việc ứng dụng công nghệ trở thành một nhiệm vụ bắt buộc với mọi doanh nghiệp. Điều đó có nghĩa là sẽ luôn có một thị trường nơi chúng tôi có thể cung cấp các giá trị của Data Impact.",
            },
          ]}
        />
      </div>
      <SolutionSection
        services={[
          { id: 1, title: "Data Solution", image: "/solution-data.jpg" },
          { id: 2, title: "IoT Development", image: "/solution-data.jpg" },
          {
            id: 3,
            title: "Deep Learning Image Processing",
            image: "/solution-data.jpg",
          },
        ]}
        title="Dịch vụ"
        subtitle="Solution"
        description={[
          "Data Impact cùng với công ty mẹ Headwaters, là đối tác chính thức của các tập đoàn hàng đầu thế giới như Microsoft, Sony, Nvidia cung cấp các giải pháp toàn diện giải quyết được các bài toán của khách hàng.",
          "Với đội ngũ nhân sự tốt nghiệp những trường Đại học hàng đầu, đã dành được nhiều giải trong các cuộc thi trên toàn thế giới, Data Impact tự tin có thể mang lại những giá trị vượt trội và đột phá.",
        ]}
      />
      <CareerSection
        careers={[
          {
            id: 1,
            title: "Frontend Developer",
            slug: "frontend-developer",
            url: "",
          },
          {
            id: 2,
            title: "Backend Developer",
            slug: "backend-developer",
            url: "",
          },
          { id: 3, title: "DevOps Engineer", slug: "devops-engineer", url: "" },
          {
            id: 4,
            title: "Senior Web Developer",
            slug: "senior-web-developer",
            url: "",
          },
        ]}
      />
      <PartnerSection
        partners={[
          {
            id: 1,
            name: "Microsoft",
            content: "This is Partner Microsoft",
            image_url:
              "https://res.cloudinary.com/dcn8reqzy/image/upload/v1728267112/Microgoft_3feb0808a4.png",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
