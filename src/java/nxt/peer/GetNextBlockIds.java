package nxt.peer;

import nxt.Block;
import nxt.Blockchain;
import nxt.util.Convert;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

final class GetNextBlockIds extends HttpJSONRequestHandler {

    static final GetNextBlockIds instance = new GetNextBlockIds();

    private GetNextBlockIds() {}


    @Override
    JSONObject processJSONRequest(JSONObject request, Peer peer) {

        JSONObject response = new JSONObject();

        JSONArray nextBlockIds = new JSONArray();
        Block block = Blockchain.getBlock(Convert.parseUnsignedLong((String) request.get("blockId")));
        while (block != null && block.getNextBlockId() != null && nextBlockIds.size() < 1440) {

            block = Blockchain.getBlock(block.getNextBlockId());
            if (block != null) {

                nextBlockIds.add(block.getStringId());

            }

        }
        response.put("nextBlockIds", nextBlockIds);

        return response;
    }

}