# roller
맡은 화면에서 롤러가 있음

## 간략 사용법
> 실제 코드로 사용하지는 말고, 샘플은 index.html열어라
```html
<div class="wrapper">
    <div class="item">
        롤링 돌아야할 컨텐츠
    </div>
</div>
<style>
    body {
        overflow: hidden;
    }
    .wrapper {
      position: relative;
      margin: 0 auto;
      width: 30000px;
      height:10px;
      overflow: hidden;
    }
    .item {
        background-color: black;
        display: inline-block;
        position: absolute;
        width: 10px;
        height: 10px;
    }
</style>
```
```javascript
window.onload = () => {
    // 롤러 인스턴스 - 만약 클래스이름이 다를 경우, 파라미터 확인
    const roller = Roller()

    // 초기상태
    roller.initialize() // 겉영역과 작성한 컨텐츠를 기준으로 클론

    // ON
    roller.on() // 내부 타이머 실행

    // OFF
    roller.off() // 내부 타이머 클리어
}
```