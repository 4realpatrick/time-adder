import { useState } from "react";
import dayjs from "dayjs";
import objectsupport from "dayjs/plugin/objectSupport";
import { Input, Button, Radio } from "antd-mobile";
import "./index.css";
interface IDayState {
  y: number;
  M: number;
  d: number;
  h: number;
  m: number;
}
function App() {
  dayjs.extend(objectsupport);
  const [start, setStart] = useState<IDayState>();
  const [end, setEnd] = useState<IDayState>({
    y: 0,
    M: 0,
    d: 0,
    h: 0,
    m: 0,
  });
  const [result, setResult] = useState<string>("");
  const [operation, setOperation] = useState<"add" | "subtract">("add");
  const handleChange = (
    val: string,
    isStart: boolean,
    type: keyof IDayState
  ) => {
    isStart
      ? // @ts-ignore
        setStart({
          ...start,
          [type]: Number(val),
        })
      : // @ts-ignore
        setEnd({
          ...end,
          [type]: Number(val),
        });
  };
  const hanldeSubmit = () => {
    setResult(
      dayjs({
        ...start,
      })
        [operation]({
          ...end,
        })
        .format("YYYY/MM/DD/HH:mm")
    );
  };
  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <Input
            placeholder="请输入开始年份"
            type="number"
            max={3000}
            value={String(start?.y)}
            onChange={(val) => {
              handleChange(val, true, "y");
            }}
          />
        </div>
        <div className="item">
          <Input
            placeholder="请输入开始月份"
            type="number"
            max={12}
            value={String(start?.M)}
            onChange={(val) => {
              handleChange(val, true, "M");
            }}
          />
        </div>
        <div className="item">
          <Input
            placeholder="请输入开始日"
            type="number"
            max={31}
            value={String(start?.d)}
            onChange={(val) => {
              handleChange(val, true, "d");
            }}
          />
        </div>
        <div className="item">
          <Input
            placeholder="请输入开始小时"
            type="number"
            max={24}
            value={String(start?.h)}
            onChange={(val) => {
              handleChange(val, true, "h");
            }}
          />
        </div>
        <div className="item">
          <Input
            placeholder="请输入开始分钟"
            type="number"
            max={300600}
            value={String(start?.m)}
            onChange={(val) => {
              handleChange(val, true, "m");
            }}
          />
        </div>
      </div>
      <div className="container">
        <Radio.Group value={operation}>
          <Radio value="add" onChange={() => setOperation("add")}>
            加上
          </Radio>
          <Radio value="subtract" onChange={() => setOperation("subtract")}>
            减去
          </Radio>
        </Radio.Group>
      </div>
      <div className="container">
        <div className="item">
          <Input
            placeholder="请输入结束年份"
            type="number"
            max={3000}
            value={String(end?.y)}
            onChange={(val) => {
              handleChange(val, false, "y");
            }}
          />
        </div>
        <div className="item">
          <Input
            placeholder="请输入结束月份"
            type="number"
            max={12}
            value={String(end?.M)}
            onChange={(val) => {
              handleChange(val, false, "M");
            }}
          />
        </div>
        <div className="item">
          <Input
            placeholder="请输入结束日"
            type="number"
            max={31}
            value={String(end?.d)}
            onChange={(val) => {
              handleChange(val, false, "d");
            }}
          />
        </div>
        <div className="item">
          <Input
            placeholder="请输入结束小时"
            type="number"
            max={24}
            value={String(end?.h)}
            onChange={(val) => {
              handleChange(val, false, "h");
            }}
          />
        </div>
        <div className="item">
          <Input
            placeholder="请输入结束分钟"
            type="number"
            max={60}
            value={String(end?.m)}
            onChange={(val) => {
              handleChange(val, false, "m");
            }}
          />
        </div>
      </div>
      <div className="container">
        <Button color="success" block onClick={hanldeSubmit}>
          提交
        </Button>
      </div>
      {result && <div className="container result">{`结果是${result}`}</div> }
    </div>
  );
}

export default App;
// ci
// ci