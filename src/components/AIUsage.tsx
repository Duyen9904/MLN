type AIUsageProps = {
  sectionRef?: React.MutableRefObject<HTMLElement | null>;
};

const AIUsage = ({ sectionRef }: AIUsageProps) => {
  return (
    <section id="ai-usage" ref={sectionRef} className="relative py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto bg-[rgba(27,20,15,0.6)] border border-[color:rgba(166,124,82,0.35)] rounded-2xl shadow-xl p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--vintage-gold)] to-[var(--vintage-tan)] mb-6">
          Phụ lục: Sử dụng AI (AI Usage)
        </h2>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-[rgba(59,47,47,0.5)] rounded-xl p-6 border border-[color:rgba(166,124,82,0.25)]">
            <h3 className="text-xl font-bold text-[var(--vintage-cream)] mb-3">Bảng kê khai</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="text-[color:rgba(239,230,213,0.75)]">
                  <tr>
                    <th className="py-2 pr-4">Công cụ</th>
                    <th className="py-2 pr-4">Mục đích</th>
                    <th className="py-2 pr-4">Prompt chính (tóm tắt)</th>
                    <th className="py-2 pr-4">Kết quả AI (tóm tắt)</th>
                    <th className="py-2 pr-4">Chỉnh sửa của SV</th>
                    <th className="py-2 pr-4">Kiểm chứng nguồn</th>
                    <th className="py-2">Vai trò</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[color:rgba(166,124,82,0.25)] text-[color:rgba(239,230,213,0.9)]">
                  <tr>
                    <td className="py-3 pr-4 align-top">NotebookLM</td>
                    <td className="py-3 pr-4 align-top">Tóm tắt nội dung từ sách/giáo trình</td>
                    <td className="py-3 pr-4 align-top">“Tóm tắt chương X, nhấn mạnh khái niệm Y, giữ thuật ngữ gốc VN”</td>
                    <td className="py-3 pr-4 align-top">5–7 ý chính, sơ đồ khái niệm</td>
                    <td className="py-3 pr-4 align-top">Chuẩn hóa thuật ngữ, bổ sung ví dụ VN, chỉnh logic</td>
                    <td className="py-3 pr-4 align-top">Đối chiếu giáo trình Chủ Nghĩa Xã Hội Khoa Học 2021</td>
                    <td className="py-3 align-top">Hỗ trợ</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 align-top">GPT</td>
                    <td className="py-3 pr-4 align-top">Làm rõ khái niệm chưa hiểu</td>
                    <td className="py-3 pr-4 align-top">“Giải thích khác nhau giữa A/B; ví dụ ngắn; gợi ý nguồn?”</td>
                    <td className="py-3 pr-4 align-top">Giải thích khái niệm, ví dụ minh họa</td>
                    <td className="py-3 pr-4 align-top">Chuẩn hóa thuật ngữ, sửa ví dụ theo bối cảnh VN</td>
                    <td className="py-3 pr-4 align-top">Đối chiếu văn bản gốc, trích dẫn trang/điều</td>
                    <td className="py-3 align-top">Hỗ trợ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[rgba(59,47,47,0.5)] rounded-xl p-6 border border-[color:rgba(166,124,82,0.25)]">
            <h3 className="text-xl font-bold text-[var(--vintage-cream)] mb-3">Cam kết liêm chính</h3>
            <ul className="list-disc pl-6 space-y-2 text-[color:rgba(239,230,213,0.9)]">
              <li>AI không thay thế toàn bộ quá trình học tập, phân tích và biên soạn.</li>
              <li>Phân định rõ AI output và phần sinh viên chỉnh sửa/biên soạn.</li>
              <li>Đối chiếu nguồn chính thống; chịu trách nhiệm về nội dung cuối cùng.</li>
            </ul>
          </div>

          <div className="bg-[rgba(59,47,47,0.5)] rounded-xl p-6 border border-[color:rgba(166,124,82,0.25)]">
            <h3 className="text-xl font-bold text-[var(--vintage-cream)] mb-3">Ứng dụng sáng tạo (AI hỗ trợ)</h3>
            <ul className="list-disc pl-6 space-y-2 text-[color:rgba(239,230,213,0.9)]">
              <li>Sơ đồ/Đồ họa: AI gợi ý khung; SV chỉnh thuật ngữ, bố cục.</li>
              <li>Quiz: AI đề xuất câu hỏi; SV biên tập độ khó, kiểm chứng đáp án.</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-xs text-[color:rgba(239,230,213,0.6)]">
          Công cụ đã dùng: NotebookLM (tóm tắt sách), GPT (làm rõ khái niệm)
        </p>
      </div>
    </section>
  );
};

export default AIUsage;


