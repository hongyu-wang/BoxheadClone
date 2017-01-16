package server.Model;


import java.util.ArrayList;

/**
 *
 * Created by hongy on 1/8/2017.
 */
public class BulletArrayModel {
    private ArrayList<BulletModel> bulletArray;

    public BulletArrayModel(){
        bulletArray = new ArrayList<>();
    }

    public ArrayList<BulletModel> getBulletArray() {
        return bulletArray;
    }

    public void setBulletArray(ArrayList<BulletModel> bulletArray) {
        this.bulletArray = bulletArray;
    }
}
