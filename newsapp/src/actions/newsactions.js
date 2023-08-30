const add = (news) => ({ type: "add", payload: news });
const del = (indexTodelete) => ({
  type: "del",
  payload: indexTodelete,
});
const clearall = () => ({ type: "clearall" });
export { add, del, clearall };