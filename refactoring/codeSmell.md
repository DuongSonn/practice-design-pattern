# Code Smell

## Bloaters

Bloaters là cụm từ để ám chỉ đoạn code, method hoặc class 'phình to' quá mức khiến chúng trở nên khó để làm việc cùng

### Long Methods

Là method có quá nhiều dòng code. Bình thường, mỗi khi 1 method có nhiều hơn 10 dòng code, bạn nên đặt câu hỏi: 'Method này có đang bị quá dài không?'

- Cách giải quyết
  - `Extract method`

```javascript
    // PROBLEM
    printOwing(): void {
        printBanner();

        // Print details.
        console.log("name: " + name);
        console.log("amount: " + getOutstanding());
    }

    // SOLUTION
    printOwing(): void {
        printBanner();
        printDetails(getOutstanding());
    }

        printDetails(outstanding: number): void {
        console.log("name: " + name);
        console.log("amount: " + outstanding);
    }
```
