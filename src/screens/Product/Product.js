import { SafeAreaView, StyleSheet, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Text from '../../components/Text/Text';
import spacing from '../../theme/spacing';
import colors from '../../theme/colors';
import { LoveSvg } from '../../svg';

const Product = ({ route }) => {
	const navigation = useNavigation();

	const { product } = route.params;
	const { name, imgPath, euro, gr, location, description } = product;

	return <SafeAreaView style={styles.container}>
		<View style={styles.imageView}>
			<Image style={{ width: '100%', height: '100%' }}
				source={require(`../../data/${imgPath}`)}
			/>
		</View>

		<View style={styles.contentArea}>
			<Text preset='h2' style={styles.title}>{name}</Text>

			<View style={styles.euroPrice}>
				<Text preset='h2' style={styles.euroAmount}>{euro}</Text>
				<Text style={styles.euroUnit}>€ / piece</Text>
			</View>

			<Text style={styles.grPrice}>~ {gr} gr / piece</Text>

			<Text preset='h3' style={styles.location}>{location}</Text>

			<Text style={styles.description}>{description}</Text>

			<View style={styles.buttonGroup}>
				<Pressable style={styles.likeButton}>
					<LoveSvg />
				</Pressable>

				<Pressable style={styles.addToCart}>
					<Feather name='shopping-cart' size={16} color={colors.white} />
					<Text preset='upper' style={styles.addToCartText}>Add To Cart</Text>
				</Pressable>
			</View>

			<Pressable style={styles.back} onPress={() => navigation.goBack()}>
				<Text preset='upper'>Back</Text>
			</Pressable>
		</View>
	</SafeAreaView>
}
export default Product;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.purple,
		position: 'relative'
	},
	imageView: {
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '35%',
	},
	contentArea: {
		position: 'absolute',
		top: '30%',
		width: '100%',
		height: '70%',
		paddingVertical: spacing[9],
		paddingHorizontal: spacing[5],
		backgroundColor: colors.light,
		borderTopLeftRadius: spacing[6],
		borderTopRightRadius: spacing[6],
		marginTop: 'auto',
	},
	title: {
		marginBottom: spacing[4]
	},
	euroPrice: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: spacing[2]
	},
	euroAmount: {
		fontSize: 32,
		marginRight: spacing[1]
	},
	euroUnit: {
		fontSize: 24
	},
	grPrice: {
		fontSize: 17,
		fontWeight: '500',
		color: colors.darkGreen,
		marginBottom: spacing[8]
	},
	location: {
		marginBottom: spacing[4]
	},
	description: {
		marginBottom: spacing[6]
	},
	buttonGroup: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: spacing[8]
	},
	likeButton: {
		backgroundColor: colors.white,
		paddingVertical: spacing[4],
		paddingHorizontal: spacing[7],
		borderRadius: spacing[2],
		marginRight: spacing[5]
	},
	addToCart: {
		width: 264,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.green,
		paddingVertical: spacing[4],
		paddingHorizontal: spacing[10],
		borderRadius: spacing[2]
	},
	addToCartText: {
		color: colors.white,
		marginLeft: spacing[5]
	},
	back: {
		textAlign: 'center',
		marginTop: spacing[8]
	}
})