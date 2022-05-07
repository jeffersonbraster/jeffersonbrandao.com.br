import Image from "next/image";

import * as S from "./styled";

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <Image
        src="https://avatars.githubusercontent.com/u/36991175?v=4"
        alt="Uma foto minha dentro de uma piscina."
        width={64}
        height={64}
      />
    </S.AvatarWrapper>
  );
};

export default Avatar;
