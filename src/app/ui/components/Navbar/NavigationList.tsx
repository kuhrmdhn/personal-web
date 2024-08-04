import { Navigation } from "@/types/NavigationType"
import NavItem from "./NavItem"

type NavigationListProps = {
    navigation: Navigation[]
}

export default function NavigationList({ navigation }: NavigationListProps) {
    return (
        <ul className='w-fit lg:w-1/3 h-full hidden sm:flex justify-center items-center gap-x-3'>
            {
                navigation.map((navigation: Navigation, index: number) => (
                    <NavItem
                        key={index}
                        navigation={navigation}
                    />
                ))
            }
        </ul>
    )
}
