# XuongFPoly
Mọi người thêm thư viện hay chạy máy ảo thì dùng npm chứ không phải yarn nha tại cái project này đang chạy bằng npm tránh việc vừa dùng yarn vừa dùng npm để chạy sẽ lỗi:
Mấy cái cú pháp của npm: 
+ Thêm thư viện: npm i <Tên thư viện>
+ Gở thư viện: npm uninstall <Tên thư viện>
+ Chạy node(metro): npx react-native start
+ Chạy máy ảo: npx react-native run-android (có thể chạy luôn lệnh này mà không cần chạy node)

project gồm 4 thư mục: 
- screen: lưu màn hình
- asset: lưu hình ảnh
- component: Nếu mọi người muốn tách một cái screen thành các thành phần nhỏ thì lưu vào đây còn không thì cứ bỏ qua. (Khi đặt tên component nhớ thêm tên của sreen ở đuôi để sau này khỏi nhầm lẫn)
- config: Trừ những cái file ở trên ra nếu có tạo thêm những file linh tinh nào khác thì lưu hết vào đây

Lưu ý khi tạo nhánh: 
Để gộp code đỡ đau đầu thì mọi người tạo 1 nhánh chỉ dùng để viết code cho 1 màn hình, mọi người mà tạo 1 nhánh viết 2 3 cái màn hình import nhiều thư viện vào quá chừng gộp code lại nó lỗi tùm lum

Ai có gì thắc mắc thì cứ hỏi. 