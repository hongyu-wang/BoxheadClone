package KeyboardControl;

import com.badlogic.gdx.InputProcessor;

import java.security.Key;

/**
 * Created by hongy on 1/7/2017.
 */
public class KeyboardSystem implements InputProcessor{

    public static void init(){

    }

    private KeyboardSystem(){}


    @Override
    public boolean keyDown(int keycode) {
        System.out.println(keycode);
        return false;
    }

    @Override
    public boolean keyUp(int keycode) {
        return false;
    }

    @Override
    public boolean keyTyped(char character) {
        return false;
    }

    @Override
    public boolean touchDown(int screenX, int screenY, int pointer, int button) {
        return false;
    }

    @Override
    public boolean touchUp(int screenX, int screenY, int pointer, int button) {
        return false;
    }

    @Override
    public boolean touchDragged(int screenX, int screenY, int pointer) {
        return false;
    }

    @Override
    public boolean mouseMoved(int screenX, int screenY) {
        return false;
    }

    @Override
    public boolean scrolled(int amount) {
        return false;
    }
}
