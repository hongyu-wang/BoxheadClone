package server.Model;

import java.util.ArrayList;

/**
 * Created by hongy on 1/8/2017.
 */
public class InitModel {
    private int id;
    private ArrayList<TerrainModel> terList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ArrayList<TerrainModel> getTerList() {
        return terList;
    }

    public void setTerList(ArrayList<TerrainModel> terList) {
        this.terList = terList;
    }
}
