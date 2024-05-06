import React, { useEffect, useState } from "react";
import { NiceModal } from "./components";
import NiceButton from "./components/Button";

export default function () {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  // useEffect(() => {}, []);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        开/关
      </button>
      <button
        onClick={() => {
          setVisible1(!visible1);
        }}
      >
        开/关1
      </button>
      <NiceModal
        visible={visible}
        title="nice modal1"
        maskable
        onCancel={() => {
          setVisible(false);
        }}
      >
        xxx
      </NiceModal>
      <NiceModal
        visible={visible1}
        title="nice modal2"
        maskable
        onCancel={() => {
          setVisible1(false);
        }}
        onOk={() => {
          setVisible(true);
        }}
      >
        yyy
      </NiceModal>
      <br />
      <br />
      <NiceButton />
      <br />
      <NiceButton type="primary" size="large">
        large
      </NiceButton>
      <br />
      <NiceButton type="success">success</NiceButton>
      <br />
      <NiceButton type="warning">warning</NiceButton>
      <br />
      <NiceButton type="danger">danger</NiceButton>
      <br />
      <NiceButton type="info">info</NiceButton>
      <br />
      <NiceButton type="primary" size="small" children="smallsmallsmall" />
      <br />
      <NiceButton children="default" />
      <br />
      <NiceButton disabled={true}>disabled</NiceButton>
      <br />
      <NiceButton circle={true}>circle</NiceButton>
      <br />
      <NiceButton icon="icon-search"> </NiceButton>
    </div>
  );
}
