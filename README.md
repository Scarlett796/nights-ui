# Nights UI

一个好用的 UI 框架。Nice UI

## Modal

<!-- | --- | --- | -->

| props      | type            |
| ---------- | --------------- |
| visible    | boolean         |
| title      | string          |
| okText     | string          |
| cancelText | string          |
| onOk       | `() => void`    |
| onCancel   | `() => void`    |
| children   | string \|\| JSX |
| maskable   | boolean         |

```js
import { NiceModal } from "nights-ui";

function Index() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        open
      </button>
      <NiceModal
        visible={visible}
        title="nice modal1"
        maskable
        onCancel={() => {
          setVisible(false);
        }}
      >
        hello world!
      </NiceModal>
    </div>
  );
}
```

## 未完待续...
