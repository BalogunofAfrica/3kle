import chevron_left from "@/assets/svg/chevron-left.svg";
import chevron_right from "@/assets/svg/chevron-right.svg";
import money from "@/assets/svg/money.svg";
import money_alt from "@/assets/svg/money-alt.svg";
import user from "@/assets/svg/user.svg";
import tick from "@/assets/svg/tick.svg";
import cancel_x from "@/assets/svg/cancel-x.svg";
import people from "@/assets/svg/people.svg";
import question from "@/assets/svg/question.svg";
import rotate from "@/assets/svg/rotate.svg";
import money_alt2 from "@/assets/svg/money-alt2.svg";
import wallet from "@/assets/svg/wallet.svg";

export const IconPack = {
  money,
  money_alt,
  user,
  chevron_right,
  chevron_left,
  tick,
  cancel_x,
  people,
  question,
  rotate,
  money_alt2,
  wallet,
};

export type IconName = keyof typeof IconPack;
