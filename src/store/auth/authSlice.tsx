import { SetState, create } from "zustand";
import { devtools } from "zustand/middleware";
import { requests } from "../../helpers/requests";
import { setToken } from "../../helpers/api";
// import { message } from "antd";

interface StateAction {
  sendCodeRequest: () => Promise<any>;
  signInRequest: () => Promise<any>;
  signOutRequest: () => Promise<any>;
  resendCodeRequest: () => Promise<any>;
  infoRequest: () => Promise<any>;
  authLoading: boolean;
  dataSendCode: {
    phone: number;
    token: string;
  };
  info: any;
}

const initialState: StateAction = {
  sendCodeRequest: async () => {},
  signInRequest: async () => {},
  signOutRequest: async () => {},
  resendCodeRequest: async () => {},
  infoRequest: async () => {},
  authLoading: false,
  info: null,
  dataSendCode: {
    phone: 0,
    token: "",
  },
};

const authStore = create(
  devtools((set: SetState<StateAction>) => ({
    ...initialState,
    sendCodeRequest: async (payload: any) => {
      set({ authLoading: true });
      try {
        const { data } = await requests.sendCode(payload);
        set({ dataSendCode: data.data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ authLoading: false });
      }
    },
    signInRequest: async (payload: any) => {
      set({ authLoading: true });
      try {
        const { data } = await requests.signIn(payload);
        setToken(data.data?.token);
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ authLoading: false });
      }
    },
    signOutRequest: async (payload: any) => {
      set({ authLoading: true });
      try {
        const { data } = await requests.signOut(payload);
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ authLoading: false });
      }
    },
    resendCodeRequest: async (payload: any) => {
      set({ authLoading: true });
      try {
        const { data } = await requests.resendCode(payload);
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ authLoading: false });
      }
    },
    infoRequest: async () => {
      set({ authLoading: true });
      try {
        const { data } = await requests.info();
        set({ info: data.data });
        return data;
      } catch (err) {
        return err;
      } finally {
        set({ authLoading: false });
      }
    },
  }))
);

export default authStore;
