export interface LoginInput {
  login_option: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  code: number;
  data: User;
}

//REGISTRATION MODELS
export interface RegisterInput {
  phone: string;
  password: string;
  country_code: number;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  code: number;
}

// VERFICATION MODELS
export interface VerficationInput {
  phone: string;
  phone_code: string;
}

export interface VerficationResponse {
  success: boolean;
  message: string;
  code: number;
  data: {
    token: string;
    user: User;
  };
}

export interface User {
  id: number;
  full_name: string;
  user_name: string;
  gender: string;
  user_country: string;
  user_city: StyleSheet;
  language: string;
  email: string;
  email_status: number;
  phone: string;
  phone_status: number;
  absher_status: number;
}
