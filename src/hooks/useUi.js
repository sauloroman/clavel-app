import { useDispatch, useSelector } from "react-redux"
import { closeMenu, openMenu } from "../store/ui/ui.slice";

export const useUi = () => {

  const { isMenuOpen } = useSelector( store => store.ui );
  const dispatch = useDispatch();

  const onShowMenu = () => {
    dispatch( openMenu() );
  }

  const onCloseMenu = () => {
    dispatch( closeMenu() );
  }

  return {
    isMenuOpen,
    
    onShowMenu,
    onCloseMenu
  }


}