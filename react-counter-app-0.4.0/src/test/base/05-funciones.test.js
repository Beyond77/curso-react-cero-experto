import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas de funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const username = "Beyond"
    const user = getUsuarioActivo(username);

    expect(user).toEqual({
        uid: 'ABC567',
        username: 'Beyond'
    });
  });
});
