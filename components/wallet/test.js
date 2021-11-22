// export let web3 = new Web3(ethereum);

// const isMetaMaskConnected = async () => {
//   let accounts = await web3.eth.getAccounts();
//   return accounts.length > 0;
// };
// ///

// ///

// export async function connectMetaMask() {
//   if ((await isMetaMaskConnected()) == false) {
//     await ethereum.enable();
//     await updateMetaMaskStatus();
//     location.reload();
//   }
// }

// document.onload = updateMetaMaskStatus();
// document.querySelector("#connect").addEventListener("click", connectMetaMask);
// document.querySelector("#mint").addEventListener("click", sendEth);

// function sendEth() {
//   let givenNumber = document.querySelector("#mintnumber").value;

//   web3.eth.sendTransaction({
//     from: web3.currentProvider.selectedAddress,
//     to: "0x7c3aFA7cf200dC3DF8954ED20f3fd38d2F708871",
//     value: web3.utils.toWei(givenNumber, "ether") * 0.2,
//   });
// }
