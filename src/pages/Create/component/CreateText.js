import React from 'react';
import './CreateText.scss';

export default function CreateText() {
  return (
    <>
      <div className="whatClass">
        <h1>간단하게 어떤 클래스인지 알려주세요.</h1>
      </div>
      <div className="whatDescription">
        <span>
          언젠가 이런 걸 가르쳐봐야지 생각해본 적이 있으신가요? 간단히
          크리에이터님이 알려 <br /> 줄 수 있는 카테고리를 설정해봐요. 모든 수정
          사항은 즉시 저장되니 안심해 주세요.
        </span>
      </div>
    </>
  );
}
