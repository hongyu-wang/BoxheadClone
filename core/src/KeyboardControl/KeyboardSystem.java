package KeyboardControl;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.InputProcessor;
import com.badlogic.gdx.utils.Json;
import com.badlogic.gdx.utils.JsonWriter;
import com.mygdx.boxhead.MyGdxGame;
import server.Model.ControlModel;
import server.Server;

/**
 * Created by hongy on 1/7/2017.
 */
public class KeyboardSystem implements InputProcessor{
    private static KeyboardSystem keyboardSystem;
    private static int scroll;
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
        scroll = 0;
    }

    public static String getJSon(){
        Json json = new Json();
        json.setOutputType(JsonWriter.OutputType.json);
        return json.toJson(keyboardSystem.controlModel);
    }

    public static int getScroll() {
        return scroll;
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
        if (keycode == 33){
            scroll = -1;
        }
        if (keycode == 45){
            scroll = 1;
        }

        return false;
    }

    @Override
    public boolean keyUp(int keycode) {
        //e = 33 q = 45
        scroll = 0;

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
