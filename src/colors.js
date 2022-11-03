import web3 from "./web3";

const address = "0x9DB674F92822a045eEc34a9877b3C98E2679532e";

const abi = [
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "string", name: "_favoriteColor", type: "string" },
    ],
    name: "addChoice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xc8623851",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "choices",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "choice", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xf6fd7fde",
  },
  {
    inputs: [{ internalType: "uint256", name: "_choice", type: "uint256" }],
    name: "getChoices",
    outputs: [
      { internalType: "string", name: "", type: "string" },
      { internalType: "string", name: "", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0x18da2cb2",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "nameToChoice",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
    constant: true,
    signature: "0xcead70c2",
  },
  {
    inputs: [
      { internalType: "string", name: "_favoriteColor", type: "string" },
    ],
    name: "setColor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x9988fa69",
  },
  {
    inputs: [{ internalType: "string", name: "_name", type: "string" }],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xc47f0027",
  },
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "string", name: "_favoriteColor", type: "string" },
      { internalType: "uint256", name: "_selection", type: "uint256" },
    ],
    name: "updateChoices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x95e84992",
  },
];
export default new web3.eth.Contract(abi, address);
