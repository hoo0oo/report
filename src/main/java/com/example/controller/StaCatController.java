package com.example.controller;

import com.example.entity.StaCat;
import com.example.entity.StaTotal;
import com.example.po.Constants;
import com.example.po.PagingResult;
import com.example.po.Result;
import com.example.service.StaCatService;
import com.example.service.StaTotalService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by heying on 2018/3/30.
 * 品类
 */
@RestController
@EnableAutoConfiguration
@RequestMapping("/cat")
public class StaCatController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Resource
    private StaCatService staCatService;

    @RequestMapping(value = "/listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> listview(@RequestBody StaCat staCat) {
        logger.info("/cat/listview");
        Result<PagingResult> result = new Result<>();
        List<StaCat> list = null;
        if (staCat.getPageNo() == null || staCat.getPageSize() == null) {
            staCat.setPageNo(1);
            staCat.setPageSize(10);
        }
        try {
            list = this.staCatService.selectAllWithPage(staCat);
            PagingResult<List<StaCat>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staCat.getPageNo());
            pagingResult.setPageSize(staCat.getPageSize());
            int count = this.staCatService.selectPageCount(staCat);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/listview,查询异常");
            logger.error("/cat/listview,查询异常");
        }

        return result;
    }

    /**
     * 各地品类数据分析，分页
     * @param staCat
     * @return
     */
    @RequestMapping(value = "/area_cat_listview", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> area_cat_listview(@RequestBody StaCat staCat) {
        logger.info("/cat/area_cat_listview");
        Result<PagingResult> result = new Result<>();
        List<StaCat> list = null;
        if (staCat.getPageNo() == null || staCat.getPageSize() == null) {
            staCat.setPageNo(1);
            staCat.setPageSize(10);
        }
        try {
            list = this.staCatService.selectAreaCatWithPage(staCat);
            PagingResult<List<StaCat>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staCat.getPageNo());
            pagingResult.setPageSize(staCat.getPageSize());
            int count = this.staCatService.selectAreaCatWithPageCount(staCat);
            pagingResult.setTotal(count);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/area_cat_listview,查询异常");
            logger.error("/cat/area_cat_listview,查询异常");
        }

        return result;
    }

    /**
     * 各地品类数据分析，柱形图
     * @param staCat
     * @return
     */
    @RequestMapping(value = "/area_cat_line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaCat>> area_cat_line(@RequestBody StaCat staCat) {
        logger.info("/cat/area_cat_line");
        Result<List<StaCat>> result = new Result<>();
        try {
            List<StaCat> list = this.staCatService.selectAreaCatLine(staCat);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/area_cat_line,查询异常");
            logger.error("/cat/area_cat_line,查询异常");
        }
        return result;
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaCat>> list(@RequestBody StaCat staCat) {
        logger.info("/cat/list");
        Result<List<StaCat>> result = new Result<>();
        try {
            List<StaCat> list = this.staCatService.selectList(staCat);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/list,查询异常");
            logger.error("/cat/list,查询异常");
        }
        return result;
    }

    /**
     * 首页-网络零售热销品类TOP30
     * @param staCat
     * @return
     */
    @RequestMapping(value = "/home_top30", method = RequestMethod.POST)
    @ResponseBody
    public Result<PagingResult> home_top30(@RequestBody StaCat staCat) {
        logger.info("/cat/home_top30");
        Result<PagingResult> result = new Result<>();
        List<StaCat> list = null;
        if (staCat.getPageNo() == null || staCat.getPageSize() == null) {
            staCat.setPageNo(1);
            staCat.setPageSize(10);
        }

        staCat.setPageRow((staCat.getPageNo()-1)*staCat.getPageSize());
        try {
            list = this.staCatService.selectHomeTop30(staCat);
            PagingResult<List<StaCat>> pagingResult = new PagingResult<>(list);
            pagingResult.setPageIndex(staCat.getPageNo());
            pagingResult.setPageSize(staCat.getPageSize());
            pagingResult.setTotal(30);
            result.setData(pagingResult);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/home_top30,查询异常");
            logger.error("/cat/home_top30,查询异常");
        }
        return result;
    }

    @RequestMapping(value = "/whole_list", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaCat>> whole_list(@RequestBody StaCat staCat) {
        logger.info("/cat/whole_list");
        Result<List<StaCat>> result = new Result<>();
        try {
            List<StaCat> list = this.staCatService.selectWholeList(staCat);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/whole_list,查询异常");
            logger.error("/cat/whole_list,查询异常");
        }
        return result;
    }


    /**
     * 首页-主要电商平台交易额走势
     * @param staCat
     * @return
     */
    @RequestMapping(value = "/home_business_line", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaCat>> selectBusinessLine(@RequestBody StaCat staCat) {
        logger.info("/cat/home_business_line");
        Result<List<StaCat>> result = new Result<>();
        try {
            List<StaCat> list = this.staCatService.selectBusinessLine(staCat);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/home_business_line,查询异常");
            logger.error("/cat/home_business_line,查询异常");
        }
        return result;
    }

    @RequestMapping(value = "/sales_count", method = RequestMethod.POST)
    @ResponseBody
    public Result<StaCat> sales_count(@RequestBody StaCat staCat) {
        logger.info("/cat/sales_count");
        Result<StaCat> result = new Result<>();
        try {
            StaCat cat = this.staCatService.selectSalesAndCountByProvince(staCat);
            result.setData(cat);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/sales_count,查询异常");
            logger.error("/cat/sales_count,查询异常");
        }
        return result;
    }

    @RequestMapping(value = "/tree", method = RequestMethod.POST)
    @ResponseBody
    public Result<List<StaCat>> tree(@RequestBody StaCat staCat) {
        logger.info("/cat/tree");
        Result<List<StaCat>> result = new Result<>();
        try {
            List<StaCat> list = this.staCatService.selectCatTreeMap(staCat);
            result.setData(list);
        } catch (Exception e) {
            e.printStackTrace();
            result.setCode(Constants.RESULT_TYPE_FAILURE);
            result.setMsg("/cat/tree,查询异常");
            logger.error("/cat/tree,查询异常");
        }
        return result;
    }
}
