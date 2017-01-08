package KeyboardControl;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.InputProcessor;
import com.badlogic.gdx.utils.Json;
import server.Model.ControlModel;

/**
 * Created by hongy on 1/7/2017.
 */
public class KeyboardSystem implements InputProcessor{
    private static KeyboardSystem keyboardSystem;

    private ControlModel controlModel;
    public static void init(){
        keyboardSystem = new KeyboardSystem();
        Gdx.input.setInputProcessor(keyboardSystem);

    }

    private KeyboardSystem(){
        controlModel = new ControlModel();
        controlModel.setSpace("false");
        controlModel.setUp("false");
        controlModel.setLeft("false");
        controlModel.setDown("false");
        controlModel.setRight("false");

    }

    public static String getJSon(){
        Json json = new Json();

        return json.toJson(keyboardSystem.controlModel);
    }


    @Override
    public boolean keyDown(int keycode) {
        //Up = 19, Left: 21, Down: 20, Right: 22, Space: 62

        if (keycode == 19){
            controlModel.setUp("true");
        }
        if (keycode == 21){
            controlModel.setLeft("true");
        }
        if (keycode == 20){
            controlModel.setDown("true");
        }
        if (keycode == 22){
            controlModel.setRight("true");
        }
        if (keycode == 62){
            controlModel.setSpace("true");
        }
        return false;
    }

    @Override
    public boolean keyUp(int keycode) {
        if (keycode == 19){
            controlModel.setUp("false");
        }
        if (keycode == 21){
            controlModel.setLeft("false");
        }
        if (keycode == 20){
            controlModel.setDown("false");
        }
        if (keycode == 22){
            controlModel.setRight("false");
        }
        if (keycode == 62){
            controlModel.setSpace("false");
        }
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
