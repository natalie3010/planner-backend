import {
  getSupplyDataV2,
  getSupplyByIDV2,
  deleteSupplyByID,
  addNewSupplyV2,
  updateExistingSupplyV2,
  getSupplyDataV2ASC,
  getSupplyDataV2DESC,
} from "../controllers/sController";
import { Router } from "express";
import { AccessControl } from "accesscontrol";
import { getApplicationAccessControlDefinition } from "../helpers/accessControlHelper";
import { checkModelValidity } from "../helpers/formValidators";
import { SupplyMapper } from "../helpers/mappers/supplyMapper";

const supplyRoutesV2 = Router();

supplyRoutesV2.get("/", (req, res) => {
  const accessControl = new AccessControl(
    getApplicationAccessControlDefinition()
  );
  if (accessControl.can(req.decodedToken.role).readAny("supply").granted) {
    try {
      const data = getSupplyDataV2(req.query.selectedSkills);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ message: `Request failed with ${err}` });
    }
  } else {
    res.status(403).send("User not authenticated");
  }
});

supplyRoutesV2.get("/ASC", (req, res) => {
  const accessControl = new AccessControl(
    getApplicationAccessControlDefinition()
  );
  if (accessControl.can(req.decodedToken.role).readAny("supply").granted) {
    try {
      const data = getSupplyDataV2ASC(
        req.query.selectedSkills,
        req.params.columnName
      );
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ message: `Request failed with ${err}` });
    }
  } else {
    res.status(403).send("User not authenticated");
  }
});

supplyRoutesV2.get("/DESC", (req, res) => {
  const accessControl = new AccessControl(
    getApplicationAccessControlDefinition()
  );
  if (accessControl.can(req.decodedToken.role).readAny("supply").granted) {
    try {
      const data = getSupplyDataV2DESC(
        req.query.selectedSkills,
        req.query.columnName
      );
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        message: `Request failed with ${err} column ${req.params.columnName}`,
      });
    }
  } else {
    res.status(403).send("User not authenticated");
  }
});

supplyRoutesV2.get("/:applicantID", (req, res) => {
  const accessControl = new AccessControl(
    getApplicationAccessControlDefinition()
  );
  if (accessControl.can(req.decodedToken.role).readAny("supply").granted) {
    try {
      const data = getSupplyByIDV2(req.params.applicantID);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ message: `Request failed with ${err}` });
    }
  } else {
    res.status(403).send("User not authenticated");
  }
});

supplyRoutesV2.put("/:applicantID", (req, res) => {
  const accessControl = new AccessControl(
    getApplicationAccessControlDefinition()
  );
  if (accessControl.can(req.decodedToken.role).updateAny("supply").granted) {
    try {
      const supply = SupplyMapper.mapFronRequest(req.body);
      const validationErrors = checkModelValidity(supply);
      if (validationErrors.length === 0) {
        const data = updateExistingSupplyV2(supply, req.params.applicantID);
        res.status(200).json(data);
      } else {
        res.status(400).json(validationErrors);
      }
    } catch (err) {
      res.status(500).json({ message: `Request failed with ${err}` });
    }
  } else {
    res.status(403).send("User not authenticated");
  }
});

supplyRoutesV2.delete("/:applicantID", (req, res) => {
  const accessControl = new AccessControl(
    getApplicationAccessControlDefinition()
  );
  if (accessControl.can(req.decodedToken.role).deleteAny("supply").granted) {
    try {
      const data = deleteSupplyByID(req.params.applicantID);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ message: `Request failed with ${err}` });
    }
  } else {
    res.status(403).send("User not authenticated");
  }
});

supplyRoutesV2.post("/", (req, res) => {
  const accessControl = new AccessControl(
    getApplicationAccessControlDefinition()
  );
  if (accessControl.can(req.decodedToken.role).updateAny("supply").granted) {
    try {
      const supply = SupplyMapper.mapFronRequest(req.body);
      const validationErrors = checkModelValidity(supply);
      if (validationErrors.length === 0) {
        const data = addNewSupplyV2(supply);
        res.status(200).json(data);
      } else {
        res.status(400).json(validationErrors);
      }
    } catch (err) {
      res.status(500).json({ message: `Request failed with ${err}` });
    }
  } else {
    res.status(403).send("User not authenticated");
  }
});

export default supplyRoutesV2;
