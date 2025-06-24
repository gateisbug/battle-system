export default async function clipboard(text?: string) {
  if (text) await navigator.clipboard.writeText(text)
  // .then(() => {
  //   alert('클립보드에 복사되었습니다: ' + text);
  // })
  // .catch(err => {
  //   console.error('복사 실패: ', err);
  //   alert('복사에 실패했습니다.');
  // });
}
