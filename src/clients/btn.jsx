"use client";
export default function CustomBtn({ btnname = " mybtn", btnfunc }) {
  return <button onClick={btnfunc}>{btnname}</button>;
}
