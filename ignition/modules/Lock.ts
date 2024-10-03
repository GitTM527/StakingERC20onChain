import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x095bD4e1C40098214e20a714B1AADA08d44f1113";

const StakingERC20Module = buildModule("StakingERC20Module", (m) => {

    const save = m.contract("StakingERC20", [tokenAddress]);

    return { save };
});

export default StakingERC20Module;