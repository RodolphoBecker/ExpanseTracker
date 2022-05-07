import styles from "../styles/homeComponents/Home.module.scss";
import MainContainer from "../components/Containers/MainContainer";
import SearchBar from "../components/homeComponents/SearchBar";
import { Title } from "../components/Titles/Titles";

const Home = () => {
	return (
		<MainContainer optionClass={styles.container}>
			<div className={styles.main}>
				<div className={styles.searchbar}>
					<SearchBar />
				</div>
				<div className={styles.categories}>
					<Title>Categories Last 30 Days</Title>
					<div className={styles.content}>{/*categories*/}</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default Home;
