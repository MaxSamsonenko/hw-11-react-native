import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const RegistrationScreen: React.FC = () => {
	const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

	return (
		<View>
			<View>
				<TouchableOpacity>
					<Text>+</Text>
				</TouchableOpacity>
			</View>

			<Text>Реєстрація</Text>

			<TextInput placeholder="Логін" />
			<TextInput placeholder="Адреса електронної пошти" />

			<View>
				<TextInput placeholder="Пароль" secureTextEntry={!passwordVisible} />
				<TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
					<Text>{passwordVisible ? "Сховати" : "Показати"}</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity>
				<Text>Зареєструватися</Text>
			</TouchableOpacity>

			<TouchableOpacity>
				<Text>Вже є акаунт? Увійти</Text>
			</TouchableOpacity>
		</View>
	);
};

export default RegistrationScreen;
