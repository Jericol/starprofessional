const headerConfig = () => ({

    headers: { Authorization: `Bearer ${localStorage.getItem("id")}`}
})


export default headerConfig;