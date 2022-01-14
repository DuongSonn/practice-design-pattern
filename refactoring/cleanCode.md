# Clean Code

Mục đích chính của việc refactoring là để chống lại [technical debt](#technical-debt). Nó giúp biến 1 mớ hỗn đôn thành clean code. Vậy clean code là gì?

## Đây là một số  đặc điểm của clean code

- `Clean code giúp các lập trình viên khác đọc code của bạn dễ hiểu hơn`. Ở đây tôi không nói tới các thuật toán cao siêu. Cách đặt tên biến khó hiểu, các class hoặc methods cồng kềnh, magic number ... tất cả các vấn đề trên sẽ dẫn đến việc code trở nên khó hiểu
- `Clean code ko nên chứa duplicate code`. Giả sử có 1 đoạn code mà bạn copy từ 1 function A sang function B, C, D ... Vậy khi bạn cập nhật logic của đoạn code đó trong function A do sai hoặc thiếu logic => Bạn sẽ phải cập nhật cho toàn bộ các phần được copy
- `Hãy dữ code ngắn và ít phụ thuộc vào thành phần khác`. Ít code đồng nghĩa với việc bạn sẽ phải nhớ ít hơn, bảo trì dễ hơn, ít bug hơn.
- `Clean code pass tất cả các test case`. Bạn sẽ nhận ra code của mình dirty khi bạn chỉ pass được 95% tests. Và bạn biết code của bạn có vấn đề nếu bạn không pass dược % nào.
- `Clean code giúp cho việc bảo trì code đơn giản hơn`

----------

# Technical Debt

Ai cũng cố gắng để viết code một cách hoàn hảo nhất. Vấn đề không phải lập trình viên cố tình viết unclean code để phá hoại project. Vậy khi nào code trở nên unclean?

Cụm từ technical debt nhằm ám chỉ tới unclean code được đưa ra bởi Ward Cunning Ham.

```javascript
VD như khi bạn vay tiền ngân hàng để mua đồ. Ban đầu bạn chỉ nghĩ tới việc làm thế nào để có tiền để mua được món đồ mình cần. Càng về sau, số tiền bạn nợ ngân hàng càng tăng lên => Lúc đó bạn phải giải quyết số tiền bạn vay ngân hàng + số tền lãi xuất.
```

Code cũng như vậy. Bạn có thể tạm thời gia tăng tốc độ bằng việc không viết test cho tính năng mới, nhưng dần dần về sau tốc độ code của bạn sẽ giảm đi và cuối cùng bạn lại phải quay lại viết test cho tính năng đấy.

## Nguyên nhân gây ra technical debt

- `Bussiness Pressure`. Đôi khi công việc yêu cầu bắt buộc bạn phải release tính năng mới trước khi làm xong. Trong trường hợp đấy, sẽ phải có liên tục các patch để sửa lỗi, giấu những phần còn thiếu trong tính năng đấy.
- `Thiếu hiểu biết về technical debt`. Đôi khi quản lý không hiểu về `technical debt` dẫn đến ảnh hưởng tới tốc độ code và việc debt chồng lên nhau. Đội dev sẽ khó khăn trong việc giành thời gian để refactoring code khi người quản lý không thấy tác dụng của việc đó.
- `Thất bại trong việc tách code`. Việc này xảy ra khi dự án được code giống 1 monolith thay vì được tách ra thành các modules khác nhau. Trong trường hợp này, việc thay đổi 1 phần của dự án sẽ dẫn đến việc ảnh hưởng đến phần khác. Việc phát triển phần mềm theo team cũng sẽ khó hơn vì không thể tách riêng các phần khác nhau
- `Thiếu test`. Việc sửa đổi và deploy ngay lập tức không thông qua test có thể gây ra 1 hậu quả không lường trước được. VD: 1 hotfix tưởng trừng đơn giản nhưng có thể gửi test mail cho hàng nghìn người dùng hệ thống hoặc tệ hơn làm hỏng dữ liệu của cả database hoặc xóa sạch database
- `Thiếu document`. Việc này sẽ gây khó khăn cho người mới khi tham gia dự án hoặc làm dự án bị tạm dừng nếu những người key của dự án rời đi.
- `Thiếu tương tác giữa các member`. Nếu kiến thức không được chia sẻ đều giữa các thành viên trong nhóm, việc này sẽ dẫn đến 1 số thành viên làm việc với thông tin, tiến trình bị outdate. Nguyên nhân có thể gây ra việc này là khi 1 mentor không training đủ kỹ cho junior của họ.
- `Phát triển dài hạn trên nhiều nhánh khác nhau`. Việc này có thể tăng khả năng gây ra `technical debt`. Càng nhiều thay đổi được làm thì càng tăng khả năng xảy ra `technical debt`
- `Delayed refactoring`. Yêu cầu hệ thống liên tục được thay đổi và đến một thời điểm, đoạn code cũ đã trở nên 'lỗi thời' và cần phải thay đổi lại. Đồng thời, các dev viết code mới bằng cách sử dụng đoạn code 'lỗi thời' đó ngày càng nhiều. Vậy nên đừng deplay việc refactor code vì càng delay về sau càng phải sửa nhiều.
- `Thiếu việc giám sát code`. Điều này xảy ra khi ai thích gì code nấy. Ko có sự giám sát hày đồng nhất trong code.
- `Incompetence`. Việc này xảy ra khi dev không biết viết code 1 cách tử tế.

----------

# Khi nào nên refactor code

- `Rule of three`

1. Khi bạn làm 1 điều gì đó lần đầu, hãy hoàn thiện nó trước đã
2. Khi bạn phải làm điều đó lần 2, hãy suy nghĩ về việc phải làm giống hệt lần 1
3. Khi bạn phải làm điều đó lần 3, hãy refactor đoạn code đó

- `Khi làm 1 tính năng mới`
  - Refactor giúp bạn hiểu code của người làm trước tốt hơn. Nếu bạn phải làm việc với đoạn code dirty của người khác, hãy refactor nó trước. Clean code sẽ dễ đọc hơn rất nhiều. Bạn sẽ giúp bản thân mình và những người về sau đọc lại nó
  - Refactor sẽ giúp làm tính năng mới một cách đơn giản hơn. Sẽ dễ thay đổi, cập nhật một đoạn clean code hơn là dirty code
- `Khi fix bug`
  - Bug trong code giống như những con bọ trong ngoài đời thật: chúng tồn tại trong môi trường bẩn nhiều nhất. Vậy nên hãy clean code của bạn và việc phát hiện bug sẽ dễ hơn rất nhiều
- `Trong quá trình review code`
  - Code reivew là cơ hội cuối cùng để clean code trước khi đưa nó ra public.
  - Tốt nhất nên review code theo cặp. Điều này sẽ tăng khả năng nhìn ra dirty code và tăng tốc độ fix vấn đề với code.

----------

# Làm thế nào để refactor ?

## Checklist nên kiểm tra sau khi thực hiện refactor

- `Đoạn code nên nhìn gọn hơn`
  - Nếu đoạn code sau khi refactor trông vẫn như thế  => Bạn đã thất bại trong việc refactor
  - Rất hay xảy ra TH khi bạn muốn refactor 1 đoạn code ngắn nhưng nhận ra mình phải refactor cả 1 đoạn code dài khác. Trong TH nếu đoạn code đó quá sloppy => Tốt nhất nên đập đi và viết lại từ đâu. Nhưng trước khi làm như vậy. Bạn nên viết các test case đầy đủ đế tránh việc bạn refactor lại làm hỏng code.
- `Function mới không nên được tạo ra trong quá trình refactor`
  - Đừng nên mix refactor và phát triển tính năng mới. Hãy tách riêng 2 quá trình này, tối thiểu hãy tách ra thành các commit khác nhau
- `Phải pass tất cả các test cũ sau khi refactor code`
