import React from "react";
import MenuList, { MenuItem } from "../../../components/dishes";


const items: MenuItem[] = [
  {
    id: 1,
    name: "Hungarian Mushroom Soup",
    description:
      "Rich & creamy loaded with flavors from Hungarian spices. Garnished with cream.",
    price: 189,
    image:
      "https://imgs.search.brave.com/jUJj50oHEkvEkLMPsPNPeHmrC_IF1Fn1_hUxCu8jP4k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2V0dGxlY3Vpc2lu/ZS5jb20vY2RuLWNn/aS9pbWFnZS93aWR0/aD03NTAsaGVpZ2h0/PTg3NCxmaXQ9Y3Jv/cCxxdWFsaXR5PTg1/L3VwbG9hZHMvcHJv/ZHVjdHMvZDcxYTMx/YzQ4NzQ0MDlhZTg5/NmQ0NjcyMzViMzhl/MTIuanBlZw",
    veg: true,
  },
  {
    id: 2,
    name: "Roasted Tomato & Red Pepper Soup",
    description:
      "Roasted tomatoes, garlic, red pepper blended together, served with pesto croutons.",
    price: 189,
    image:
      "https://imgs.search.brave.com/kwxuNYV0wIsBuBL8ecdcZZLVPZeXpU9sAoCK49oBFsU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGx5cmVjaXBl/cy5jb20vdGhtYi9X/dGFZcnh6Nm5RdDZ3/QlBfMU9udjRoM3Iy/UVU9LzE1MDB4MC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTptYXhf/Ynl0ZXMoMTUwMDAw/KTpzdHJpcF9pY2Mo/KS9fX29wdF9fYWJv/dXRjb21fX2NvZXVz/X19yZXNvdXJjZXNf/X2NvbnRlbnRfbWln/cmF0aW9uX19zaW1w/bHlfcmVjaXBlc19f/dXBsb2Fkc19fMjAx/OV9fMDhfX2NsYXNz/aWMtdG9tYXRvLXNv/dXAtbGVhZC01LTI1/ODE4NjA3OTJmODQz/OTA5MzJlMWU3OWI0/YWFkY2E4LmpwZw",
    veg: true,
  },
];

const App: React.FC = () => {
  return (
    <div>
      <MenuList items={items} />
    </div>
  );
};

export default App;
